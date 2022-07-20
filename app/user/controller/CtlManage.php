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
        $page = $this->request->param('page');
        $limit = $this->request->param('limit');
        return $this->srv->articleList($page, $limit);
    }

    public function addArticle()
    {
        $id = $this->request->param('id', 0);
        $out['data'] = $this->srv->getArticle($id);
        return view('manage/addArticle', $out);
    }

    public function addArticleAction()
    {
        $post = $this->request->post();
        return $this->srv->addArticleAction($post);
    }

    public function articlePublish()
    {
        $id = $this->request->param('id');
        return $this->srv->articlePublish($id);
    }

    public function delArticle()
    {
        $id = $this->request->param('id');
        return $this->srv->delArticle($id);
    }

}
