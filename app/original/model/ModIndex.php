<?php
namespace app\original\model;

use think\Db;
use think\Model;

class ModIndex extends Model
{
    public function articleList()
    {
        $sql = "select a.*,FROM_UNIXTIME(a.`atime`) as atime,b.nickname from `article` a left join `user` b on a.`uid` = b.`uid` where 1 ";
        return $this->query($sql);
    }

    public function articleDetails($article_id)
    {
        $sql = "select a.*,FROM_UNIXTIME(a.`atime`) as atime,b.nickname from `article` a left join `user` b on a.`uid` = b.`uid` where a.`id` =:id limit 1";
        $list = $this->query($sql, ['id' => $article_id]);
        return $list[0];
    }

    public function articleOther($article_id)
    {
        $sql = "select `id`,`title` from `article` where `id` < :id order by `id` desc limit 1";
        $prev = $this->query($sql, ['id' => $article_id]);
        if(!empty($prev)) {
            $prev = $prev[0];
        }
        $sql = "select `id`,`title` from `article` where `id` > :id order by `id` asc limit 1";
        $next = $this->query($sql, ['id' => $article_id]);
        if(!empty($next)) {
            $next = $next[0];
        }
        return array(
            'prev' => $prev,
            'next' => $next,
        );
    }

    public function articleComment($article_id)
    {
        $sql = "select *,FROM_UNIXTIME(`atime`) as atime from `comment` where `article_id` =:article_id ";
        $sql_c = "select count(1) as c from `comment` where `article_id` =:article_id ";

        $count = $this->query($sql_c, ['article_id' => $article_id]);
        $count = $count[0];
        if(!$count['c']) {
            return array('list'=>[],'total'=>0);
        }

        return array(
            'list' => $this->query($sql, ['article_id' => $article_id]),
            'total' => $count['c'],
        );
    }

    public function commentPublish($params)
    {
        return Db::name('comment')->insert($params);
    }
}
