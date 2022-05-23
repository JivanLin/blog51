<?php
namespace app\admin\controller;

use app\admin\service\SrvArticle;

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

    public function articleListJson()
    {
        $params = [
            'page' => $this->request->param('page', 1),
            'limit' => $this->request->param('limit', 15),
        ];
        return $this->srv->articleListJson($params);
    }

    public function addArticle()
    {
        $id = $this->request->param('id', 0);
        $out = [];
        if($id) {
            $out['data'] = $this->srv->getArticle($id);
        }
        return view('article/addArticle', $out);
    }

    public function addArticleAction()
    {
        $post = $this->request->post();
        $params = [
            'id' => $post['id'],
            'title' => $post['title'],
            'content' => $post['content-md'],
            'atime' => time(),
        ];
        return $this->srv->addArticleAction($params);
    }

    public function updateArticleStatus()
    {
        $id = $this->request->param('id', 0);
        $status = $this->request->param('status', 0);
        return $this->srv->updateArticleStatus($id, $status);
    }

}
