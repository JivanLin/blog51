<?php
namespace app\admin\controller;

use think\Request;

class Article
{
    public $request;

    public function __construct()
    {
        $this->request = new Request();
        $this->mod = model('Article');
    }

    public function index()
    {
        return view('article/index');
    }

    public function articleList()
    {
        $params = [
            'page' => $this->request->param('page', 1),
            'limit' => $this->request->param('limit', 15),
        ];
        $articleList = $this->mod->articleList($params);
        return $articleList;
    }

    public function addArticle()
    {
        $params['id'] = $this->request->param('id', 0);
        $out['data'] = '';
        if($params['id']) {
            $out['data'] = $this->mod->getArticle($params);
        }
        return view('article/addArticle', $out);
    }

    public function addArticleAction()
    {
        $params = $this->request->post();
        $ret = $this->mod->addArticleAction($params);
        if($ret) {
            return success('','操作完成');
        }
        return fail('发表失败！');
    }

}
