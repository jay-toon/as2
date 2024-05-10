import { rename } from 'fs';

function renameMP3File(oldPath, newPath) {
    rename(oldPath, newPath, (err) => {
        if (err) {
            console.error('Error renaming file:', err);
        } else {
            console.log('File renamed successfully!');
        }
    });
}

renameMP3File('./soundtracks/かめりあ.mp3', './soundtracks/かめりあ - ???.mp3');