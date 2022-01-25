<?php
namespace app\index\model;

use think\Db;

class ModIndex
{
    public function getEssay($id)
    {
        return Db::name('essay')->where('id',$id)->find();
    }

    public function getEssayList()
    {
        return Db::name('essay')->where('state',0)->paginate(10);
    }
}
