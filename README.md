# 📚 Projektbeschreibung

TodoApp ist eine Anwendung zur Verwaltung von Aufgaben, die mit React für das Frontend und MongoDB für das Backend entwickelt wurde. Die Anwendung bietet Funktionen zum Anmelden und Registrieren sowie zur Verwaltung von Aufgaben.

## ✨ Funktionen

- **🔐 Registrieren**: Neue Benutzer können sich registrieren, um ein Konto zu erstellen.
- **🔓 Anmelden**: Bestehende Benutzer können sich anmelden, um auf ihre Aufgaben zuzugreifen.
- **➕ Aufgaben erstellen**: Benutzer können neue Aufgaben hinzufügen.
- **📋 Aufgaben anzeigen**: Alle Aufgaben werden in einer übersichtlichen Liste angezeigt.
- **✏️ Aufgaben aktualisieren**: Benutzer können den Status oder den Inhalt ihrer Aufgaben bearbeiten.
- **❌ Aufgaben löschen**: Aufgaben können gelöscht werden, wenn sie nicht mehr benötigt werden.

## 💻 Technologien

- **Frontend**: React, HTML, CSS
- **Backend**: Node.js, Express.js
- **Datenbank**: MongoDB

## ⚙️ Installation und Ausführung

1. **📥 Repository klonen**

    ```bash
    git clone https://github.com/deinbenutzername/todoapp.git
    cd todoapp
    ```

2. **🔧 Backend installieren und starten**

    ```bash
    cd todoapp
    npm install
    npm run dev
    ```

3. **🔑 Umgebungsvariablen**

    Erstellen Sie eine `.env`-Datei im `backend`-Verzeichnis mit folgendem Inhalt:

    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    ```


