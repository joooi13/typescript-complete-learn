# typescript-complete-learn

## watch mode 
保存したら自動的にjsに変換される
エラーがでてもコンパイルされる
```
//どっちでもいい
$ tsc index.ts --watch  
$ tsc index.ts -w  
```

## 一気にコンパイルする方法
```
//複数指定
$ tsc index.ts hello.ts
```

```
//tsconfig.jsonが作成される
$ tsc --init
//tscを打つだけでコンパイルができるようになる。watch modeも使える
$ tsc                                
```

## sourceMap
```
//sourceMap=trueにしてからコンパイルするとmapファイルができる
$ tsc

//ブラウザで開く
$ open index.html

```

## outDir

```
"./dist"を指定しているので"./dist"配下にコンパイル結果が出力される
```