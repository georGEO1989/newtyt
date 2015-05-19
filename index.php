<?php
include_once "includes/header.php";
?>
		<article class="featured-videos">
			<h3>Featured Videos</h3>
		</article>
		<article class="featured jumbotron">
			<div>
				<div ng-app="YouTubeApp"><!--
					<iframe width="92%" height="auto" src="https://www.youtube.com/embed/kKAqJa2ZG3E" frameborder="0" allowfullscreen></iframe>
					-->
					<youtube width="92%" height="auto" videoid="M7lc1UVf-VE"></youtube>

				</div>
			</div>
		</article>

	</section>

	<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
	<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular.min.js"></script>
	<script type="text/javascript" src="scripts/main.js"></script>
	<script type="text/javascript" src="scripts/controllers.js"></script>
</body>
</html>