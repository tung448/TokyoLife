# Sử dụng image Node.js chính thức
FROM node:14

# Tạo và chỉ định thư mục làm việc trong container
WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Expose cổng mà ứng dụng sẽ chạy
EXPOSE 8011

# Command để chạy ứng dụng
CMD ["npm", "start"] # hoặc lệnh khởi động ứng dụng của bạn
