function mod(coverPhoto, profilePhoto, name, group, loc, time, date, handle, description, forums, facebook, mobilize, discord, slack) {
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
							'<h3 class="name"> '+ name+ '</h3>' +
							'<p class="profession">' +group+ '</p>' +
							'<p class="text-center">' +'<i class="fas fa-map-marker-alt">' +'</i>' + loc + '</p>' +
							'<p class="text-center">' +'<i class="far fa-clock"> </i>' + ' <span class="clock" data-timezone='+ time + '></span>' + '</p>' +
							'<p class="text-center">' +'<i class="far fa-calendar-alt">' +'</i>' + date + '</p>' +
						'</div>' +
						'<div class="footer">' +
							'<i class="fas fa-share"></i>' + 'Read More' + 
						'</div>' +
					'</div>' +
				'</div>' + '<!-- end front panel -->' +
				'<div class="back">' +
					'<div class="header">' +
						'<h5 class="motto">' + group + '</h5>' +
					'</div>' +
					'<div class="content">' +
						'<div class="main">' +
							'<h4 class="text-center"> <a href="https://www.codecademy.com/profiles/'+handle+'" >@' +handle+ '</a></h4>' +
							'<p class="text-center">' +description+ '</p>' +

						'</div>' +
					'</div>' +
					'<div class="footer">' +
						'<div class="social-links text-center">';
	
	if(forums)
		newDiv += '<i class="fab fa-discourse"></i>';
	
	if(facebook)
		newDiv += '<i class="fab fa-facebook"></i>';
	
	if(mobilize)
		newDiv += '<i class="fas fa-code"></i>';
	
	if(discord)
		newDiv += '<i class="fab fa-discord"></i>';
	
	if(slack)
		newDiv += '<i class="fab fa-slack"></i>';
	
	newDiv += '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>';
				
	$("#modBox").append(newDiv);
}
