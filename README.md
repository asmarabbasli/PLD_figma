# PLDforHB
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <div class="sidebar">
    <div>
      <h1>Dashboard</h1>
      <div class="menu">
        <a href="#">Dashboard</a>
        <a href="#">Product</a>
        <a href="#" class="active">Customers</a>
        <a href="#">Income</a>
        <a href="#">Promote</a>
        <a href="#">Help</a>
      </div>
      <div class="promo">
        <p>Upgrade to PRO to get access all features!</p>
        <button>Get Pro Now!</button>
      </div>
    </div>
    <div class="profile">
      <img src="https://i.pravatar.cc/40" alt="">
      <span>Evano<br><small>Project Manager</small></span>
    </div>
  </div>
  <div class="main">
    <div class="header">
      <h2>Hello Evano :wave:</h2>
      <input type="text" placeholder="Search">
    </div>
    <div class="cards">
      <div class="card">
        <p>Total Customers</p>
        <h3>5,423</h3>
        <p class="success">+16% this month</p>
      </div>
      <div class="card">
        <p>Members</p>
        <h3>1,893</h3>
        <p class="danger">-1% this month</p>
      </div>
      <div class="card">
        <p>Active Now</p>
        <h3>189</h3>
      </div>
    </div>
    <div class="table-container">
      <h3>All Customers</h3>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jane Cooper</td>
            <td>Microsoft</td>
            <td>(225) 555-0118</td>
            <td>jane@microsoft.com</td>
            <td>United States</td>
            <td><span class="status active">Active</span></td>
          </tr>
          <tr>
            <td>Floyd Miles</td>
            <td>Yahoo</td>
            <td>(205) 555-0100</td>
            <td>floyd@yahoo.com</td>
            <td>Kiribati</td>
            <td><span class="status inactive">Inactive</span></td>
          </tr>
          <tr>
            <td>Ronald Richards</td>
            <td>Adobe</td>
            <td>(302) 555-0107</td>
            <td>ronald@adobe.com</td>
            <td>Israel</td>
            <td><span class="status inactive">Inactive</span></td>
          </tr>
          <tr>
            <td>Marvin McKinney</td>
            <td>Tesla</td>
            <td>(252) 555-0126</td>
            <td>marvin@tesla.com</td>
            <td>Iran</td>
            <td><span class="status active">Active</span></td>
          </tr>
          <tr>
            <td>Jerome Bell</td>
            <td>Google</td>
            <td>(629) 555-0129</td>
            <td>jerome@google.com</td>
            <td>Réunion</td>
            <td><span class="status active">Active</span></td>
          </tr>
          <tr>
            <td>Kathryn Murphy</td>
            <td>Microsoft</td>
            <td>(406) 555-0120</td>
            <td>kathryn@microsoft.com</td>
            <td>Curaçao</td>
            <td><span class="status active">Active</span></td>
          </tr>
          <tr>
            <td>Jacob Jones</td>
            <td>Yahoo</td>
            <td>(208) 555-0112</td>
            <td>jacob@yahoo.com</td>
            <td>Brazil</td>
            <td><span class="status active">Active</span></td>
          </tr>
          <tr>
            <td>Kristin Watson</td>
            <td>Facebook</td>
            <td>(704) 555-0127</td>
            <td>kristin@facebook.com</td>
            <td>Åland Islands</td>
            <td><span class="status inactive">Inactive</span></td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <button>&lt;</button>
        <button class="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>...</button>
        <button>40</button>
        <button>&gt;</button>
      </div>
    </div>
  </div>
</body>
</html>

Slackbot
  4:05 PM
Pssst! I didn’t unfurl https://i.pravatar.cc/40 because it was already shared in this channel quite recently (within the last hour) and I didn’t want to clutter things up.


Asmar Abbasli
  4:05 PM
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}
body {
  display: flex;
  background: #f9fafb;
  color: #111827;
}
/* Sidebar */
.sidebar {
  width: 240px;
  background: #fff;
  padding: 20px;
  height: 100vh;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sidebar h1 {
  font-size: 20px;
  font-weight: 700;
}
.menu {
  margin-top: 40px;
}
.menu a {
  display: block;
  padding: 12px 16px;
  margin-bottom: 10px;
  border-radius: 8px;
  color: #374151;
  text-decoration: none;
  font-weight: 500;
}
.menu a.active {
  background: #7c3aed;
  color: #fff;
}
.promo {
  margin-top: auto;
  padding: 20px;
  text-align: center;
  background: linear-gradient(to right, #7c3aed, #3b82f6);
  border-radius: 12px;
  color: #fff;
}
.promo button {
  margin-top: 12px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: #fff;
  color: #4f46e5;
  cursor: pointer;
  font-weight: 600;
}
.profile {
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
}
.profile img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
/* Main Content */
.main {
  flex: 1;
  padding: 30px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h2 {
  font-size: 22px;
  font-weight: 600;
}
.header input {
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
}
.cards {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
.card {
  flex: 1;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}
.card h3 {
  font-size: 28px;
  margin-top: 8px;
}
.card p {
  font-size: 14px;
  color: #6b7280;
}
.success {
  color: #16a34a;
}
.danger {
  color: #dc2626;
}
/* Table */
.table-container {
  margin-top: 30px;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  padding: 14px;
  text-align: left;
  font-size: 14px;
  border-bottom: 1px solid #f0f0f0;
}
th {
  color: #6b7280;
  font-weight: 600;
}
td {
  color: #374151;
}
.status {
  padding: 6px 12px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 13px;
}
.status.active {
  background: #dcfce7;
  color: #16a34a;
}
.status.inactive {
  background: #fee2e2;
  color: #dc2626;
}
.pagination {
  display: flex;
  gap: 8px;
  margin-top: 20px;
}
.pagination button {
  padding: 6px 12px;
  border: 1px solid #e5e7eb;
  background: #fff;
  border-radius: 6px;
  cursor: pointer;
}
.pagination button.active {
  background: #7c3aed;
  color: #fff;
  border: none;
}