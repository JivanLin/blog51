<?php
namespace app\admin\model;

use think\Db;

class ModArticle
{
    public function listJson($params)
    {
        $sql = Db::name('article')->field('a.*,b.nick as author')->alias('a')->leftJoin('admin b', 'a.author_id = b.id')->where('status', '<>', 2);
        $count = Db::name('article')->where('status', '<>', 2)->count();

        if (!$count) {
            return array('list' => [], 'total' => 0);
        }

        $sql = $sql->order('atime', 'desc')->page($params['page'], $params['limit']);
        return array('list' => $sql->select(), 'total' => $count);
    }

    public function getArticle($id)
    {
        return Db::name('article')->field('a.*,b.nick as author')->alias('a')->leftJoin('admin b', 'a.author_id = b.id')->where('a.id', '=', $id)->find();
    }

    public function addAction($params)
    {
        if ($params['id']) {
            $id = $params['id'];
            unset($params['id']);
            return Db::name('article')->where(['id' => $id])->update($params); //更新成功 1 数据无更新 0 更新失败false
        } else {
            return Db::name('article')->insert($params);
        }
    }

    public function updateStatus($update, $where)
    {
        return Db::name('article')->where($where)->update($update);
    }

}
