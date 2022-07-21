<?php
namespace app\index\model;

use think\Db;
use think\Model;

class ModIndex extends Model
{
    public function getArticle($where)
    {
        return Db::name('article')->where($where)->find();
    }

    public function getArticleList($limit = 15)
    {
        return Db::name('article')->order('atime', 'desc')->paginate($limit);
    }
}
