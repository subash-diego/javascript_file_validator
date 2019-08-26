# javascript_file_validator
Validating selected Input file

# Installation
  - Download javascript_file_validator 
  - Call Gloabally 

## Sample for Calling

```html
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript" src="sd_file_validator.js"></script>
</head>
<body>
	<input onchange="validate_file(this)" _sd_type="png|jpg|jpeg|gif|mp4" _sd_size="2048" _sd_height="350" _sd_width="550" type="file" name="feed_contents" id="feed_contents" class="form-control">
</body>
</html>
```
### Options (-)

- _sd_type="png|jpg|jpeg|gif|mp4" (*)
- _sd_size="2048" (KB)
- _sd_height="350"
- _sd_width="550"
- _sd_min_height="300"
- _sd_min_width="500"
