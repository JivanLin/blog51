<?php
namespace app\admin\controller;

class Article
{
    public function index()
    {
        return view('article/index');
    }

    public function articleList()
    {
        $articleList = model('Article')->articleList();
        return json($articleList);
    }
}
