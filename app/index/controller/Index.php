<?php
namespace app\index\controller;

use think\Controller;
use think\Request;

class Index extends Controller
{
    public function index()
    {
        $articleList = model('Index')->articleList();
        $out = [
            'list' => $articleList,
        ];
        return view('/index', $out);
    }

    public function details(Request $request)
    {
        $article_id = $request->param('id');
        $details = model('Index')->articleDetails($article_id);
        $other = model('Index')->articleOther($article_id);
        $comment = model('Index')->articleComment($article_id);
        $out = [
            'data' => $details,
            'other' => $other,
            'comment' => $comment,
        ];
        return view('/details', $out);
    }

    public function commentPublish(Request $request)
    {
        $params = [
            'article_id' => $request->param('article_id'),
            'content' => $request->param('content'),
            'atime' => time(),
        ];
        $ret = model('Index')->commentPublish($params);
        if($ret) {
            return $this->success('评论成功');
        } else {
            return $this->error('评论失败');
        }
    }

}
