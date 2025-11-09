#!/bin/bash
set -e

# 古いPIDが残っている場合は削除（よくあるエラー対策）
rm -f /app/tmp/pids/server.pid

# 与えられたコマンドを実行してプロセスを置き換える
exec "$@"