<?php
namespace app\original\controller;

use app\original\model\ModIndex;
use think\Request;

class CtlIndex
{
    public function __construct()
    {
        $this->mod = new ModIndex();
    }

    public function index()
    {
        $articleList = $this->mod->articleList();
        $out = [
            'list' => $articleList,
        ];
        return view('/index', $out);
    }

    public function details(Request $request)
    {
        $article_id = $request->param('id');
        $details = $this->mod->articleDetails($article_id);
        $other = $this->mod->articleOther($article_id);
        $comment = $this->mod->articleComment($article_id);
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
        $ret = $this->mod->commentPublish($params);
        if($ret) {
            return success('','评论成功');
        } else {
            return fail('评论失败');
        }
    }

}
