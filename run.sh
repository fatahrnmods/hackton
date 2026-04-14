#!/bin/bash

# Mendapatkan jumlah logical core dan dikalikan 2
LOGICAL_CORES=$(sysctl -n hw.logicalcpu)
TOTAL_INSTANCES=$((LOGICAL_CORES * 3))

echo "Deteksi Core: $LOGICAL_CORES"
echo "Menjalankan $TOTAL_INSTANCES instansi wasmtime secara paralel..."

for i in $(seq 1 $TOTAL_INSTANCES); do
    # Menjalankan wasmtime di background
    wasmtime run --dir=. -S http=y -S inherit-network=y --env RIF_NETWORK=1 ./bot-rif.wasm &
done

# Menunggu semua proses background selesai
wait

echo "Semua proses telah selesai."
