<?php
namespace app\admin\model;

use think\Db;

class ModNotepad
{
    public function notepadList($params)
    {
        $params['page'] < 0 && $params['page'] = 1;

        $sql = Db::name('notepad')->order('id','desc');
        $count = Db::name('notepad')->count();

        if(!$count) {
            return array('list' => [], 'total' => 0);
        }

        $sql = $sql->page($params['page'],$params['limit']);
        return array('list' => $sql->select(), 'total' => $count);
    }

    public function getNotepad($params)
    {
        return Db::name('notepad')->where('id','=',$params['id'])->find();
    }

    public function addNotepadAction($params)
    {
        $params['create_time'] = time();
        $res = $this->getNotepad($params);
        if($res) {
            $id = $params['id'];
            unset($params['id']);
            return Db::name('notepad')->where(['id' => $id])->update($params);
        }
        return Db::name('notepad')->insert($params);
    }

    public function delNotepad($params)
    {
        return Db::name('notepad')->where('id','=',$params['id'])->delete();
    }
}
