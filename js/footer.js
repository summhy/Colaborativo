// A $( document ).ready() block.
$(document).ready(function () {
  console.log("ready!");

  document.getElementById("footer").innerHTML = `
    <div class="footer-section">
  <div class="container">
    <div class="footer-cta pt-5 pb-5">
      <div class="row">
        <div class="col-xl-4 col-md-4 mb-30">
          <div class="single-cta">
            <i class="fas fa-map-marker-alt"></i>
            <div class="cta-text">
              <h4>Estamos en</h4>
              <span>UNAB, Viña del Mar</span>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-4 mb-30">
          <div class="single-cta">
            <i class="fas fa-phone"></i>
            <div class="cta-text">
              <h4>Llámanos</h4>
              <span>9876543210 0</span>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-4 mb-30">
          <div class="single-cta">
            <i class="far fa-envelope-open"></i>
            <div class="cta-text">
              <h4>Escríbenos</h4>
              <span>computines@info.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   <div class="footer-social-icon">\<a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a><a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
     <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
    </div>
  <div class="copyright-area">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6 text-center text-lg-left">
          <div class="copyright-text">
            <p>Copyright &copy; 2018, Todos los derechos reservados para COMPUTINES 2.0 </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    `;
});
