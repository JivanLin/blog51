<?php
namespace app\admin\model;

use think\Db;

class ModPlatform
{
    public function essayList($params)
    {
        $sql = Db::name('essay');
        $count = Db::name('essay')->count();
        //if($params['id']) {
        //    $sql = $sql->where('id','=',$params['id']);
        //}

        if(!$count) {
            return array('list' => [], 'total' => 0);
        }

        $sql = $sql->page($params['page'],$params['limit']);
        return array(
            'list' => $sql->select(),
            'total' => $count,
        );
    }

    public function getEssay($params)
    {
        $sql = Db::name('essay');
        if($params['id']) {
            $sql = $sql->where('id','=',$params['id']);
        }
        return $sql->find();
    }

    public function getEssayTags()
    {
        $data = Db::name('tags')->select();
        $tags = array_column($data,'label','id');
        return $tags;
    }

    public function essayInsert($params)
    {
        return Db::name('essay')->insert($params);
    }

    public function essayUpdate($update,$where)
    {
        return Db::name('essay')->where($where)->update($update);
    }
}
