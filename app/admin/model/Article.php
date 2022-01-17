<?php
namespace app\admin\model;

use think\Model;

class Article extends Model
{
    public function articleList($params)
    {
        $params['page'] < 0 && $params['page'] = 1;

        $sql = $this->db('article')->alias('a')->leftJoin('user b','a.uid = b.uid');
        $count = $this->db('article')->count();
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
        return $this->db('article')->where('id','=',$params['id'])->find();
    }

    public function addArticleAction($params)
    {
        $res = $this->getArticle($params);
        if($res) {
            $id = $params['id'];
            unset($params['id']);
            return $this->db('article')->where(['id' => $id])->update($params);
        }
        return $this->db('article')->insert($params);
    }
}
