<?php
namespace app\index\model;

use think\Db;
use think\Model;

class ModIndex extends Model
{
    public function getArticle()
    {
        return Db::name('article')->where('status',1)->paginate(10);
    }
}
