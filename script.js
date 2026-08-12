const students=[
['Hanif',17,'Badminton','Tetap sederhana, terus berkembang.'],['Retno',17,'Membaca','Nikmati prosesnya.'],['Maritza',16,'Music','Do what makes you happy.'],['Naila',17,'Badminton','Small steps every day.'],
['Nana',17,'Drawing','Create your own story.'],['Nurul',17,'Cooking','Be kind, always.'],['Orin',17,'Gaming','Never stop learning.'],['Putri',16,'Music','Everything will be okay.'],
['Royhan',17,'Gaming','Work hard, stay humble.'],['Sriyanti',17,'Badminton','Make today count.'],['Alya',17,'Reading','Believe in yourself.'],['Aisyah',16,'Photography','Collect moments, not things.'],
['Kirana',17,'Writing','Your effort matters.'],['Joshua',17,'Gaming','Keep moving forward.'],['Dinda',17,'Cooking','Good things take time.'],['Hafidzul Furqan',17,'Gaming & Badminton','Be better than yesterday.'],
['Faris',17,'Football','Stay focused.'],['Rizky',16,'Gaming','Enjoy the journey.'],['Salsa',17,'Drawing','Dream big.'],['Siti',17,'Reading','One day at a time.'],
['Della',16,'Cooking','Make it meaningful.'],['Fina',17,'Music','Let your heart speak.'],['Rani',17,'Badminton','Keep your spirit high.'],['Vina',16,'Movies','Life is a collection of moments.'],
['Aulia',17,'Reading','Learn, grow, repeat.'],['Nadia',17,'Singing','Be yourself.'],['Rafa',17,'Basketball','Never give up.'],['Ilham',16,'Gaming','Stay positive.'],
['Fikri',17,'Football','Discipline beats motivation.'],['Naufal',17,'Cycling','Enjoy every ride.'],['Citra',16,'Drawing','Make something beautiful.'],['Maya',17,'Cooking','Happiness is homemade.'],
['Dimas',17,'Gaming','Keep improving.'],['Rara',16,'Music','Follow your passion.'],['Bagas',17,'Badminton','Practice makes progress.'],['Zahra',17,'Reading','Be proud of your progress.']
];
const pics=['https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80','https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=700&q=80','https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=700&q=80','https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=700&q=80'];
function card(s,i){return `<article><img src="${pics[i%pics.length]}" alt="${s[0]}"><div><h3>${s[0]}</h3><p>Umur: ${s[1]} tahun</p><p>Hobby: ${s[2]}</p><p>“${s[3]}”</p></div></article>`}
let offset=0;function render(){studentsGrid.innerHTML=[0,1,2,3].map(i=>card(students[(offset+i)%students.length],i)).join('')}render();setInterval(()=>{offset=(offset+4)%students.length;render()},5000);

const moments=['https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80','https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80','https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=80','https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80','https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=1000&q=80','https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=1000&q=80'];
gallery.innerHTML=moments.map((x,i)=>`<img src="${x}" alt="Moment ${i+1}">`).join('');

const lessons={Senin:['Matematika','Bahasa Indonesia','IPA','PJOK'],Selasa:['Bahasa Inggris','Informatika','IPS','Seni Budaya'],Rabu:['Pendidikan Agama','Matematika','Bahasa Inggris','PKN'],Kamis:['Bahasa Indonesia','Kimia','Sejarah','Informatika'],Jumat:['Fisika','Matematika','Bahasa Inggris','Projek Kelas']};
const duties={Senin:['Hanif','Retno','Maritza','Naila','Nana'],Selasa:['Nurul','Orin','Putri','Royhan','Sriyanti'],Rabu:['Alya','Aisyah','Kirana','Joshua','Dinda'],Kamis:['Faris','Rizky','Salsa','Siti','Della'],Jumat:['Fina','Rani','Vina','Aulia','Nadia']};
function tabs(id,data,panel,render){const el=document.getElementById(id);Object.keys(data).forEach((day,i)=>{const b=document.createElement('button');b.className='tab'+(!i?' active':'');b.textContent=day;b.onclick=()=>{el.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(day)};el.appendChild(b)});render(Object.keys(data)[0])}
tabs('lessonTabs',lessons,'lessonPanel',d=>lessonPanel.innerHTML=lessons[d].map((x,i)=>`<div class="row"><span class="time">${['07:00–08:30','08:30–10:00','10:30–12:00','13:00–14:30'][i]}</span><span><b class="subject">${x}</b><small class="teacher">Guru Mata Pelajaran</small></span></div>`).join(''));
tabs('dutyTabs',duties,'dutyPanel',d=>dutyPanel.innerHTML=duties[d].map(x=>`<span class="person">${x}</span>`).join(''));
