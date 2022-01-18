<?php
namespace app\admin\model;

use think\Db;

class ModArticle
{
    public function articleList($params)
    {
        $params['page'] < 0 && $params['page'] = 1;

        $sql = Db::name('article')->alias('a')->leftJoin('user b','a.uid = b.uid');
        $count = Db::name('article')->count();
//        if($params['id']) {
//            $sql = $sql->where('id','=',$params['id']);
//        }

        if(!$count) {
            return array('list' => [], 'total' => 0);
        }

        $sql = $sql->page($params['page'],$params['limit']);
        return array('list' => $sql->select(), 'total' => $count);
    }

    public function getArticle($params)
    {
        return Db::name('article')->where('id','=',$params['id'])->find();
    }

    public function addArticleAction($params)
    {
        $res = $this->getArticle($params);
        if($res) {
            $id = $params['id'];
            unset($params['id']);
            return Db::name('article')->where(['id' => $id])->update($params);
        }
        return Db::name('article')->insert($params);
    }
}
