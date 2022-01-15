<?php
namespace app\admin\model;

use think\Model;

class Article extends Model
{
    public function articleList($params)
    {
        $params['page'] < 0 && $params['page'] = 1;

        $list = $this->db('article')->alias('a')->leftJoin('user b','a.uid = b.uid')->page($params['page'],$params['limit'])->select();
        $count = $this->db('article')->count();
        if(!$count) {
            return array('list' => [], 'total' => 0);
        }

        return array('list' => $list, 'total' => $count);
    }
}
