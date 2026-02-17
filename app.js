const axios = require('axios');

// Masukkan data kamu di sini
const token = '7978765525:AAHTz3pqxMhSRzzqbDo2mv15lhJ1VWeAaoM';
const chatId = '7968360269';
const fileUrl = 'https://media1.tenor.com/m/6rvRCSw-2pIAAAAd/sat1-middle-finger.gif';

// URL API Telegram
const apiUrl = `https://api.telegram.org/bot${token}/sendDocument`;

async function kirimFile(delay) {
    try {
        const response = await axios.post(apiUrl, {
            chat_id: chatId,
            document: fileUrl,
            caption: 'Revenge in progress...' // Opsional: Tambah teks
        });

        console.log("File Berhasil Terkirim:", response.data.ok);
        
        // Jeda sebelum mengirim lagi
        setTimeout(() => kirimFile(delay), delay);
        
    } catch (error) {
        console.error('Gagal mengirim:', error.response ? error.response.data : error.message);
        
        // Jika gagal (misal kena limit), coba lagi setelah jeda
        setTimeout(() => kirimFile(delay), delay);
    }
}

// Mulai pengiriman setiap 1 detik (1000ms)
console.log("Memulai serangan spam...");
kirimFile(1000);
