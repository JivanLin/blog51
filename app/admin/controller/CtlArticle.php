<?php
namespace app\admin\controller;

use app\admin\service\SrvArticle;
use app\admin\service\SrvAuth;

class CtlArticle extends CtlIndex
{
    protected $middleware = ['admin'];
    protected $srv;

    public function __construct()
    {
        $this->request = Request();
        $this->srv = new SrvArticle();
    }

    public function articleList()
    {
        return view('article/list');
    }

    public function listJson()
    {
        $params = [
            'page' => $this->request->param('page', 1),
            'limit' => $this->request->param('limit', 15),
        ];
        return $this->srv->listJson($params);
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
