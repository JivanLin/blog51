<?php
namespace app\user\model;

use think\Db;

class ModManage
{
    public function articleList($page,$limit)
    {
        $sql = Db::name('article')->field('a.id,a.aid,a.title,a.describe,a.status,a.atime,a.tags,a.content,b.nick as author')
            ->alias('a')->leftJoin('admin b', 'a.aid = b.id');
        $count = Db::name('article')->count();

        if (!$count) {
            return array('list' => [], 'total' => 0);
        }

        $page = $page < 1 ? 1 : $page;
        $limit = $limit < 1 ? 15 : $limit;
        $sql = $sql->order('atime', 'desc')->page($page, $limit);
        return array('list' => $sql->select(), 'total' => $count);
    }

    public function getArticle($id)
    {
        return Db::name('article')->field('a.*,b.nick as author')->alias('a')->leftJoin('admin b', 'a.aid = b.id')->where('a.id', '=', $id)->find();
    }

    public function addArticleAction($params)
    {
        if ($params['id']) {
            $where = ['id' => $params['id']];
            unset($params['id']);
            return $this->updateArticle($where, $params);
        } else {
            $params['atime'] = time();
            return Db::name('article')->insert($params);
        }
    }

    public function updateArticle($where, $update)
    {
        //更新成功 1 数据无更新 0 更新失败false
        return Db::name('article')->where($where)->update($update);
    }

    public function delArticle($where)
    {
        return Db::name('article')->where($where)->delete();
    }

}
