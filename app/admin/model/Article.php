<?php
namespace app\admin\model;

use think\Model;

class Article extends Model
{
    public function articleList()
    {
        $sql = "select a.*,b.nickname from `article` a left join `user` b on a.`uid` = b.`uid` where 1 ";
        $sql_c = "select count(1) as c from `article` limit 1 ";

        $count = $this->query($sql_c);
        $count = $count[0];
        if(!$count['c']) {
            return array('list' => [], 'total' => 0);
        }

        return array(
            'list' => $this->query($sql),
            'total' => $count['c'],
        );
    }
}
