# Meta Ping Poing

Das Spiel Meta Ping Pong wird im Modul WebE entwickelt. 

Das Spiel basiert auf ein PingPong-Spiel. Es ist ein Dualplayer - Spiel und kann auf verschiedenen Schwierigkeitsgrad (schneller Ball) gespielt werden. 

Es gibt zwei Modis: 
1) Spieler gegen Computer
2) Spieler gegen Spieler

# Ziele des Spieles

Spiel 1 gegen Computer:

* Dabei spielt man gegen eine fiktiven Spielgegner der Computer. 
* Mit einem Paddle muss man den Ball auf die andere Seite zurückspielen. 
* Wer zuerst 11 Punkte erreicht und 11 Bälle in den Hintergrund getroffen hat, hat gewonnen.

Spiel 2 gegen Spielgegner:

* Dabei müssen die Spielgegner mit dem Ball in den Hintergrund spielen. 
* Einer Spielt mit «up», «down»
* Ein anderer Spieler benutzt «S» und «W»
* Mit einem Paddle muss man den Ball auf die andere Seite zurückspielen. 
* Wer zuerst 11 Punkte erreicht und 11 Bälle in den Hintergrund getroffen hat, hat gewonnen.


Das Spiel wird auf den Webtechnologien javascript und PostgreSQL erstellt.

Framework Frontend:
- React

Framework Backend:
- Express, nodejs

# Installationsanleitung

1.	Klonen Sie das Projekt

2.	Starten Sie Docker

3.	Starten Sie das Terminal

4.	Stellen Sie sicher, dass Sie in dem «app» Ordner sind von dem Projekt

meta> cd app

5.	Gebend Sie nun das Kommando «docker-compose up» ein

Meta\app> docker-compose up

Wenn der Docker-Container «Storage» läuft ist er im Docker sichtbar und grün hinterlegt


6.	Danach müssen Sie in den Projektordner «backend»

Meta\app> cd backen

7.	Geben Sie das Kommando «npm start» ein

Meta\app\backend> npm start

Dabei sollte der Server starten und es sollte so im Terminal sichtbar sein das die Server gestartet sind
- 3001
- 4000

8.	Öffnen Sie ein neues Terminal

9.	Stellen Sie sicher, dass Sie in dem «app» Ordner sind von dem Projekt

meta> cd app

10.	Danach müssen Sie in den Projektordner «frontend»

Meta\app> cd frontend

11.	Geben Sie das Kommando «npm start» ein

meta\app\frontend> npm start

Ist das Ausführen erfolgreich sollte es im Terminal sichtbar sein.
 

Jetzt sollte sich der Browser automatisch öffnen im «http://localhost:3000»
 
12.	Jetzt als Benutzer registrieren

13.	Als Benutzer einloggen und los geht das Spiel.
Viel Spass!

### Troubleshooting
#### Fehlermeldung npm start

Falls npm start bei backend oder frontend, oder bei beiden nicht funktioniert.

1.	Lösche die «node_module»

2.	Danach müssen Sie in den Projektordner «backend»

meta\app> cd backend

3.	Geben Sie das Kommando «npm install» ein

meta\app\backend> npm install

4.	Danach müssen Sie in den Projektordner «frontend»

meta\app> cd frontend

5.	Geben Sie das Kommando «npm install» ein

meta\app\frontend> npm install

6.	Jetzt können Sie zu Abschnitt 1 zurück

#### Fehlermeldung docker-compose up
1.	Gehen Sie in Docker und setzten Sie Docker auf «Clean / Purge data»
 
2.	Setzen Sie überall ein Häkchen und klicken Sie auf Delete

3.	Jetzt gehen Sie in zurück auf Abschnitt Installationsanweisung

#### Kontakt Support
-	chantale.gihara@students.ffhs.ch
-	theologos.baxevanos@students.ffhs.ch



Entwickler und Autoren:
- Thelogos Baxevanos
- Chantale Gihara


