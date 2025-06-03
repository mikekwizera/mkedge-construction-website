<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index() {

        $article = Article::where('status',1)
                           ->orderBy('created_at', 'DESC')
                           ->get();
        return response()->json([
            'status' => true,
            'data' => $article
        ]);
    }

    public function latestArticles(Request $request) {
        $article = Article::where('status',1)
                    ->limit($request->limit)
                    ->orderBy('created_at', 'DESC')
                    ->get();
        return response()->json([
            'status' => true,
            'data' => $article
        ]);
    }
}
