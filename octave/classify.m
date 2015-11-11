function [classification, probability] = classify(X)
  load('Thetas.dat');
  m = size(X, 2);
  h1 = sigmoid(Theta1 * [ones(1, m); X]);
  h2 = sigmoid(Theta2 * [ones(1, m); h1]);
  [probability, classification] = max(h2, [], 1);
  classification = mod(classification, 10);
end
