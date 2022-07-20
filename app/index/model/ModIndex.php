<?php
namespace app\index\model;

use think\Db;
use think\Model;

class ModIndex extends Model
{
    public function getArticle($id)
    {
        return Db::name('article')->where('id',$id)->find();
    }

    public function getArticleList()
    {
        return Db::name('article')->where('status',1)->paginate(10);
    }
}
