var totalReadPages = 0;
var bookNumber = 1;
var inputNumber = 1; // Her bir girdinin numarasını takip etmek için kullanılan değişken

document.getElementById('bookInfoBtn').addEventListener('click', function(event) {
    event.preventDefault();
    
    var bookName = document.getElementById('bookName').value;
    var pageCount = parseInt(document.getElementById('pageCount').value);
    var daysLeft = parseInt(document.getElementById('daysLeft').value);
    
    var dailyTarget = Math.ceil(pageCount / daysLeft);
    
    document.getElementById('bookInput').style.display = 'none';
    document.getElementById('readingLog').style.display = 'block';
    document.getElementById('bookTitle').innerText = bookName + " Okuma Günlüğü";
    document.getElementById('progressMessage').innerText = "Bugün hiçbir şey okunmadı.";
    document.getElementById('remainingPages').innerText = "Kalan Miktar: " + pageCount + " sayfa";
    
    document.getElementById('logBtn').addEventListener('click', function(event) {
        event.preventDefault();
        
        var currentPage = parseInt(document.getElementById('currentPage').value);
        
        totalReadPages += currentPage;
        var readPercentage = Math.ceil((totalReadPages / pageCount) * 100);
        var progressMessage = (totalReadPages >= pageCount) ? "Tebrikler! Günlük hedefinize ulaştınız." : "Günlük hedefinize ulaşmak için günde en az " + dailyTarget + " sayfa okumanız gerekiyor.";
        
        document.getElementById('progressMessage').innerText = progressMessage;
        document.getElementById('remainingPages').innerText = "Kalan Miktar: " + (pageCount - totalReadPages) + " sayfa";
        
        var now = new Date();
        var dateString = now.toLocaleDateString('en-US');
        var timeString = now.toLocaleTimeString('en-US');
        var dateTimeString = dateString + ' ' + timeString;
        
        var noteInput = document.getElementById('noteInput').value;
        var noteList = document.getElementById('noteList');
        var li = document.createElement('li');
        li.textContent = "Girdi " + inputNumber + ": \"" + noteInput + "\" - " + totalReadPages + "/" + pageCount + " sayfa - " + dateTimeString + " - " + readPercentage + "% okundu";
        noteList.appendChild(li);
        
        inputNumber++; // Her bir girdinin numarasını artır
        document.getElementById('currentPage').value = '';
        document.getElementById('noteInput').value = '';
    });
    
    document.getElementById('addNoteBtn').addEventListener('click', function(event) {
        event.preventDefault();
        
        var noteInput = document.getElementById('noteInput').value;
        var noteList = document.getElementById('noteList');
        var li = document.createElement('li');
        li.textContent = noteInput;
        noteList.appendChild(li);
        
        document.getElementById('noteInput').value = '';
    });
});

document.getElementById('goBackBtn').addEventListener('click', function(event) {
    event.preventDefault();
    
    document.getElementById('bookInput').style.display = 'block';
    document.getElementById('readingLog').style.display = 'none';
    
    totalReadPages = 0;
    bookNumber = 1;
    inputNumber = 1; // Sayfa yenilendiğinde girdi numarasını sıfırla
});
