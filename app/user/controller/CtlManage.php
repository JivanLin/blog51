<?php
namespace app\user\controller;

use app\user\service\SrvManage;
use app\user\service\SrvAuth;

class CtlManage
{
    protected $middleware = ['user'];

    public function __construct()
    {
        $this->request = Request();
        $this->srv = new SrvManage();
    }

    public function article()
    {
        return view('manage/article');
    }

    public function articleList()
    {
        $params = [
            'page' => $this->request->param('page', 1),
            'limit' => $this->request->param('limit', 15),
        ];
        return $this->srv->articleList($params);
    }

    public function add()
    {
        $id = $this->request->param('id', 0);
        $out = [];
        if ($id) {
            $out['data'] = $this->srv->getArticle($id);
        }
        return view('article/addArticle', $out);
    }

    public function addAction()
    {
        $post = $this->request->post();
        $params = [
            'id' => $post['id'],
            'title' => $post['title'],
            'describe' => $post['describe'],
            'content' => $post['content-md'],
            'atime' => time(),
            'aid' => SrvAuth::get_cookie('id', true),
        ];
        return $this->srv->addAction($params);
    }

    public function updateStatus()
    {
        $id = $this->request->param('id');
        $opt = $this->request->param('opt');
        return $this->srv->updateStatus($id, $opt);
    }

}
