<?php
namespace app\notepad\model;

use think\Db;
class ModIndex
{
    public function noteList()
    {
        return Db::name('notepad')->order('create_time','DESC')->select();
    }

    public function noteDetails($params)
    {
        $data = Db::name('notepad')->where('id','=',$params['id'])->find();
        $prev = Db::name('notepad')->field(['id','title'])->where('id','>',$params['id'])->order('id','ASC')->find();
        $next = Db::name('notepad')->field(['id','title'])->where('id','<',$params['id'])->order('id','DESC')->find();
        return array(
            'data' => $data,
            'prev' => $prev,
            'next' => $next,
        );
    }
}
