<?php
namespace app\admin\controller;

use think\facade\Request;

class Article
{
    public function index()
    {
        return view('article/index');
    }

    public function articleList()
    {
        $params = $_GET;
        $articleList = model('Article')->articleList($params);
        return json($articleList);
    }
}
