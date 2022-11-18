for i in portal highlightcard
do
	#npx -p @angular/cli@14.2.10 ng new --routing --skip-tests --style scss --skip-git --prefix $i ngx-planet-demo-$i
	(cd ngx-planet-demo-$i; npm i @angular/cdk@14.2.7 @worktile/planet --save; npm i @angular-builders/custom-webpack webpack-assets-manifest --save-dev)
done
