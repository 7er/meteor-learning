image = 1 - double(imread('example.jpg')) / 255;
colormap(gray);
imagesc(image, [-1 1]);
[classification, probability] = classify(image(:))
pause;
