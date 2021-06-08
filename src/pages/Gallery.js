import React from 'react'

export const Gallery = () => {
    return (
        <React.Fragment>
            {/* <!-- breadcrumb start--> */}
	<section className="breadcrumb breadcrumb_bg">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="breadcrumb_iner text-center">
						<div className="breadcrumb_iner_item">
							<h2>elements</h2>
							<h5>home <span></span>elements</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- breadcrumb start--> */}
    <div className="section-top-border">
				<h3>Image Gallery</h3>
				<div className="row gallery-item">
					<div className="col-md-4">
						<a href="assets/img/elements/g1.jpg" className="img-pop-up img-gal gallery_img">
							<div className="single-gallery-image" style={{background: URL("assets/img/elements/g1.jpg")}}></div>
						</a>
					</div>
					<div className="col-md-4">
						<a href="assets/img/elements/g2.jpg" className="img-pop-up img-gal gallery_img">
							<div className="single-gallery-image" style={{background: "url(assets/img/elements/g2.jpg)"}}></div>
						</a>
					</div>
					<div className="col-md-4">
						<a href="assets/img/elements/g3.jpg" className="img-pop-up img-gal gallery_img">
							<div className="single-gallery-image" style={{background: "url(assets/img/elements/g3.jpg)"}}></div>
						</a>
					</div>
					<div className="col-md-6">
						<a href="assets/img/elements/g4.jpg" className="img-pop-up img-gal gallery_img">
							<div className="single-gallery-image" style={{background: "url(assets/img/elements/g4.jpg)"}}></div>
						</a>
					</div>
					<div className="col-md-6">
						<a href="assets/img/elements/g5.jpg" className="img-pop-up img-gal gallery_img">
							<div className="single-gallery-image" style={{background: "url(assets/img/elements/g5.jpg)"}}></div>
						</a>
					</div>
					<div className="col-md-4">
						<a href="assets/img/elements/g6.jpg" className="img-pop-up img-gal gallery_img">
							<div className="single-gallery-image" style={{background: "url(assets/img/elements/g6.jpg)"}}></div>
						</a>
					</div>
					<div className="col-md-4">
						<a href="img/elements/g7.jpg" className="img-pop-up img-gal gallery_img">
							<div className=" single-gallery-image" style={{background: "url(img/elements/g7.jpg)"}}></div>
						</a>
					</div>
					<div className="col-md-4">
						<a href="assets/img/elements/g8.jpg" className="img-pop-up img-gal gallery_img">
							<div className="single-gallery-image" style={{background: "url(assets/img/elements/g8.jpg)"}}></div>
						</a>
					</div>
				</div>
			</div>
        </React.Fragment>
    )
}
