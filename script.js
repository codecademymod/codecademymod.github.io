function mod(coverPhoto, profilePhoto, name, group, loc, date, handle, description) {
	newDiv = '' +
	'<div class="col-md-3 col-sm-4">' +
		 '<div class="card-container">' +
			'<div class="card">' +
				'<div class="front">' +
					'<div class="cover">' +
						'<img src="' + coverPhoto + '"/>' +
					'</div>' +
					'<div class="user">' +
						'<img class="img-circle" src="'+ profilePhoto + '"/>' +
					'</div>' +
					'<div class="content">' +
						'<div class="main">' +
							'<h3 class="name">' +name+ '</h3>' +
							'<p class="profession">' +group+ '</p>' +
							'<p class="text-center">' +'<i class="fas fa-map-marker-alt">' +'</i>' + loc + '</p>' +
							'<p class="text-center">' +'<i class="far fa-calendar-alt">' +'</i>' + date + '</p>' +
						'</div>' +
						'<div class="footer">' +
							'<i class="fas fa-share"></i>' + 'Auto Rotation' + 
						'</div>' +
					'</div>' +
				'</div>' + '<!-- end front panel -->' +
				'<div class="back">' +
					'<div class="header">' +
						'<h5 class="motto">' + group + '</h5>' +
					'</div>' +
					'<div class="content">' +
						'<div class="main">' +
							'<h4 class="text-center"> @ ' +handle+ '</h4>' +
							'<p class="text-center">' +description+ '</p>' +

						'</div>' +
					'</div>' +
					'<div class="footer">' +
						'<div class="social-links text-center">' +
							'<a href="https://www.codecademy.com/profiles/'+handle+'" class="google">' +'<i class="fas fa-laptop-code">' +'</i>' +'</a>' +
						'</div>' +
					'</div>' +
				'</div>' + 
			'</div>' + 
		'</div>' + 
	'</div>';
	
	$("#modBox").append(newDiv);
}
