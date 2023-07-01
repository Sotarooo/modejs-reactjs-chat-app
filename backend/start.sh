# Start-Processを使用してバックエンドを実行する
Start-Process npm -ArgumentList "run start" -WorkingDirectory "./backend" -NoNewWindow

# フロントエンドを実行する
cd "frontend"
npm install
npm run dev