# NEnglish - Ứng dụng Học Tiếng Anh

## 1. Cài đặt và Chạy
```bash
npm install
npm run dev
```

## 2. Cấu hình Firebase
Ứng dụng đã được cấu hình sẵn với Firebase config trong `src/lib/firebase.ts`.
Tuy nhiên, bạn **BẮT BUỢC** phải cập nhật Firestore Security Rules trong Firebase Console để ứng dụng có thể đọc/ghi dữ liệu.

### Firestore Security Rules
Vào Firebase Console -> Firestore Database -> Rules, dán đoạn code sau và Publish:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Hàm kiểm tra user đã đăng nhập
    function isAuthenticated() {
      return request.auth != null;
    }
    
    // Hàm kiểm tra user có phải là admin không
    function isAdmin() {
      return isAuthenticated() && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }

    // Public chỉ đọc nội dung học
    match /grades/{gradeId} {
      allow read: if true;
      allow write: if isAdmin();
      
      match /units/{unitId} {
        allow read: if true;
        allow write: if isAdmin();
        
        match /lessons/{lessonId} {
          allow read: if true;
          allow write: if isAdmin();
          
          match /words/{wordId} {
            allow read: if true;
            allow write: if isAdmin();
          }
        }
      }
    }

    // User data: chỉ chủ sở hữu mới được đọc/ghi
    match /users/{userId} {
      allow read: if isAuthenticated() && request.auth.uid == userId;
      allow write: if isAuthenticated() && request.auth.uid == userId;
      
      match /progress_words/{document=**} {
        allow read, write: if isAuthenticated() && request.auth.uid == userId;
      }
      match /quiz_attempts/{document=**} {
        allow read, write: if isAuthenticated() && request.auth.uid == userId;
      }
      match /speaking_attempts/{document=**} {
        allow read, write: if isAuthenticated() && request.auth.uid == userId;
      }
      match /listening_attempts/{document=**} {
        allow read, write: if isAuthenticated() && request.auth.uid == userId;
      }
      match /spelling_attempts/{document=**} {
        allow read, write: if isAuthenticated() && request.auth.uid == userId;
      }
      match /mistakes/{document=**} {
        allow read, write: if isAuthenticated() && request.auth.uid == userId;
      }
      match /daily_stats/{document=**} {
        allow read, write: if isAuthenticated() && request.auth.uid == userId;
      }
    }
  }
}
```

### Storage Security Rules
Vào Firebase Console -> Storage -> Rules, dán đoạn code sau và Publish:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && firestore.get(/databases/(default)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

## 3. Cách Set Admin Role
1. Đăng nhập vào ứng dụng bằng tài khoản Google hoặc Email.
2. Vào Firebase Console -> Firestore Database -> collection `users`.
3. Tìm document có ID trùng với UID của bạn.
4. Sửa trường `role` từ `"user"` thành `"admin"`.
5. Tải lại trang web, bạn sẽ thấy menu "Admin" xuất hiện.

## 4. Cách Chạy Seed Script
1. Đảm bảo bạn đã đăng nhập và được set quyền `admin` (hoặc tạm thời set rule `allow write: if true;` cho `grades`).
2. Nhấn vào link "Seed Data" ở dưới Footer.
3. Nhấn nút "Chạy Seed Script" để tạo dữ liệu mẫu.

## 5. Practice (Speaking/Listening/Spelling)
Module Luyện Tập đã được tích hợp các tính năng:
- **Speaking**: Sử dụng Web Speech API (SpeechRecognition) để nhận diện giọng nói. Lưu ý: Tính năng này chỉ hoạt động tốt nhất trên trình duyệt Google Chrome (Desktop/Android) hoặc Safari (iOS/macOS). Nếu trình duyệt không hỗ trợ, ứng dụng sẽ hiện thông báo.
- **Listening**: Sử dụng Web Speech API (SpeechSynthesis) để phát âm thanh. Có thể chọn giọng đọc (nếu trình duyệt hỗ trợ nhiều giọng).
- **Spelling Bee (Nghe & Viết)**: Trò chơi luyện nghe và gõ lại từ vựng. Có hệ thống tính điểm, combo, mạng (lives) và tự động lưu các từ vựng gõ sai vào sổ tay (mistakes log) để ôn tập sau.

## 6. Deploy Vercel
Ứng dụng đã sẵn sàng để deploy lên Vercel. Chỉ cần kết nối repository với Vercel và deploy với các cài đặt mặc định của Vite.
