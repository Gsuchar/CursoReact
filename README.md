<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Route Tracker Mix</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="iframeStyles.css"> <!-- Using the provided CSS file name -->
  <!-- Font Awesome for icons from menu lateral.html -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <!-- Material Symbols for icons from menu lateral.html -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

  <style>
    /* Basic styles for submenu toggle */
    .submenu-toggle-btn {
      background: none;
      border: none;
      color: inherit;
      cursor: pointer;
      padding: 0;
      font-size: inherit;
      margin-left: auto; /* Push to the right */
    }
    .submenu-list {
      display: none; /* Hidden by default */
      list-style: none;
      padding-left: 20px; /* Indent submenu items */
      margin: 0;
    }
    .submenu-list.active {
      display: block; /* Show when active */
    }
    .submenu-list a {
      display: block;
      padding: 8px 15px;
      color: #007bff;
      text-decoration: none;
      font-size: 13px;
    }
    .submenu-list a:hover {
      background-color: #e9ecef;
      color: #0056b3;
    }

    /* Styles for collapsed sidebar */
    #sidebar.collapsed {
      width: 50px;
    }

    #sidebar.collapsed .list-group-item span:not(.material-symbols-outlined),
    #sidebar.collapsed .list-group-item i:not(.fas) {
      display: none; /* Hide text */
    }

    #sidebar.collapsed .list-group-item .material-symbols-outlined,
    #sidebar.collapsed .list-group-item .fas {
      transform: scale(1.2); /* Zoom icons */
      margin-right: 0 !important; /* Remove margin to center */
      width: 100%; /* Occupy full width for centering */
      text-align: center; /* Center the icon */
    }

    #sidebar.collapsed .list-group-item {
      text-align: center; /* Center content in collapsed state */
      padding: 10px 0; /* Adjust padding for collapsed state */
    }

    #sidebar.collapsed .sidebar-heading h4,
    #sidebar.collapsed .sidebar-menu span,
    #sidebar.collapsed .sidebar-menu small {
      display: none; /* Hide header text and user info */
    }

    #sidebar.collapsed .sidebar-heading {
      justify-content: center; /* Center logo when text is hidden */
    }

    #sidebar.collapsed .sidebar-heading img {
      margin-right: 0 !important; /* Remove margin from logo */
    }

    #sidebar.collapsed .menu-toggle {
      width: 100%; /* Make toggle button full width */
    }

    #sidebar.collapsed .list-group-item .sub-item {
      padding-left: 0; /* Adjust padding for sub-items */
    }

    #sidebar.collapsed #menu-dashboards {
      display: none;
    }
  </style>
</head>

<body>
  <div class="wrapper">
    <!-- Menú lateral - Combined from menu lateral.html and Side-Menu.html concepts -->
    <div id="sidebar">
      <div class="sidebar-heading d-flex align-items-center py-2">
        <img src="img/logoRouterTracker_dist.png" alt="Logo" class="img-fluid mr-2" />
        <h4>Route Tracker</h4>
      </div>
      <div class="sidebar-menu text-center py-4">
        <img src="img/ID_uy.png" class="rounded-circle mb-2" alt="User Image" style="border: 3px solid white" />
        <span id="user"></span>
        <small class="text-muted">Distribuidor</small>
      </div>
      <div class="list-group list-group-flush">
        <!-- Item with submenu and dynamic loading -->
        <div class="list-group-item list-group-item-action d-flex flex-column align-items-start">
          <a href="#" class="d-flex align-items-center w-100" onclick="toggleSubmenu(event, 'submenu-tablero')">
            <span class="material-symbols-outlined mr-2 align-middle">view_list</span>Tablero
            <button class="submenu-toggle-btn">▼</button>
          </a>
          <ul id="submenu-tablero" class="submenu-list w-100">
            <li><a href="#" onclick="cargarDashboard('public:Portales:Pruebas_Gaston:TABLERO_IFRAME.wcdf')">Sub-Tablero 1</a></li>
            <li><a href="#" onclick="cargarDashboard('public:Portales:RouteTrackerUL_UY_Dist:Dashboards:test4_jp.wcdf')">Sub-Tablero 2</a></li>
          </ul>
        </div>

        <!-- Other items from menu lateral.html, converted to dynamic loading -->
        <a href="#" class="list-group-item list-group-item-action"
          onclick="cargarDashboard('public:Portales:RouteTrackerUL_UY_Dist:Dashboards:test4_geoportal.wcdf')">
          <i class="fas fa-map-marker-alt mr-2"></i>Geoportal
        </a>
        <a href="#" class="list-group-item list-group-item-action"
          onclick="cargarDashboard('public:Portales:RouteTrackerUL_UY_Dist:Dashboards:test4_detalles.wcdf')">
          <i class="fas fa-info-circle mr-2"></i>Detalle
        </a>
        <a href="#" class="list-group-item list-group-item-action"
          onclick="cargarDashboard('public:Portales:RouteTrackerUL_UY_Dist:Dashboards:Segmentacion.wcdf')">
          <i class="fas fa-chart-pie mr-2"></i>Segmentación
        </a>
        <a href="#" class="list-group-item list-group-item-action"
          onclick="cargarDashboard('public:Portales:RouteTrackerUL_UY_Dist:Dashboards:rtuy_rastreo.wcdf')">
          <i class="fas fa-search-location mr-2"></i>Supervisión
        </a>
        <a href="#" class="list-group-item list-group-item-action"
          onclick="cargarDashboard('public:Portales:RouteTrackerUL_UY_Dist:Dashboards:ZoomRutas.wcdf')">
          <span class="material-symbols-outlined mr-2 align-middle">route</span>RutaZoom
        </a>
      </div>

      <div class="menu-header">
        <button class="menu-toggle" onclick="toggleMenu()">≡</button>
      </div>
    </div>

    <!-- Área principal -->
    <div class="main-content">
      <iframe id="iframe-principal" src="about:blank"></iframe> <!-- Initial blank src -->
    </div>

  </div>

  <script>
    // Function to load dashboard into iframe
    function cargarDashboard(dashboardPath) {
      const iframe = document.getElementById('iframe-principal');
      const baseUrl = "https://routetracker.idretail.com/pentaho/api/repos/";
      iframe.src = baseUrl + dashboardPath + "/generatedContent";

      // Optional: Add active class to the clicked menu item
      // This part needs more sophisticated logic if you want to highlight the parent menu item
      // or submenu item that is currently active. For now, just loads the iframe.
    }

    // Function to toggle sidebar collapse
    function toggleMenu() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('collapsed');
      const mainContent = document.querySelector('.main-content');

      // Adjust main content width based on sidebar state
      if (sidebar.classList.contains('collapsed')) {
        mainContent.style.width = 'calc(100% - 50px)';
      } else {
        mainContent.style.width = 'calc(100% - 14.5rem)'; // Use the original width from menu lateral.html's CSS
      }
    }

    // Function to toggle submenu visibility
    function toggleSubmenu(event, submenuId) {
      event.preventDefault(); // Prevent default link behavior
      const submenu = document.getElementById(submenuId);
      if (submenu) {
        submenu.classList.toggle('active');
        // Optionally change the toggle button icon
        const toggleBtn = event.currentTarget.querySelector('.submenu-toggle-btn');
        if (toggleBtn) {
          toggleBtn.textContent = submenu.classList.contains('active') ? '▲' : '▼';
        }
      }
    }

    // Set initial iframe content to a default dashboard or blank
    document.addEventListener('DOMContentLoaded', () => {
      // You can set a default dashboard to load here if needed
      // cargarDashboard('public:Portales:Pruebas_Gaston:TABLERO_IFRAME.wcdf');
    });
  </script>
</body>

</html>
