const soundtrack = './soundtrack/かめりあ.mp3';

function renameMP3File(oldPath, newPath) {
    fetch(oldPath)
        .then(response => response.blob())
        .then(blob => {
            /* This DOES rename it. It just makes it downloaded. I'm too tired to */
            // const url = URL.createObjectURL(blob);
            // const a = document.createElement('a');
            // a.href = url;
            // a.download = newPath;
            // a.click();
            // URL.revokeObjectURL(url);
            console.log('File renamed successfully!');
        })
        .catch(err => {
            console.error('Error renaming file:', err);
        });
}

renameMP3File(soundtrack, 'Camellia (かめりあ) - ???.mp3');


/// WHO THE FUCK CODED THIS??? WHAT IS THIS MESS LMAO