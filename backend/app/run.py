import json
from flask import Flask
from flask import render_template, request, jsonify
import pickle
import os
from tensorflow.python.keras.preprocessing import sequence
import keras.backend.tensorflow_backend as tb
tb._SYMBOLIC_SCOPE.value = True
from flask_cors import CORS 

ONE_LABEL_COL = "child_alone"

app = Flask(__name__)
CORS(app)
with open('../model/clf.pickle', 'rb') as f:
    modelrr = pickle.load(f)
with open('../model/nlpclf.pickle', 'rb') as f:
    tokenz = pickle.load(f)
with open('../model/labelencoder.pickle', 'rb') as f:
    labelencoder = pickle.load(f)

def getModelVar():
    with open('../model/clf.pickle', 'rb') as f:
        modelrr = pickle.load(f)
    with open('../model/nlpclf.pickle', 'rb') as f:
        tokenz = pickle.load(f)
    with open('../model/labelencoder.pickle', 'rb') as f:
        labelencoder = pickle.load(f)

def getResults(textToProcess): 
    tb._SYMBOLIC_SCOPE.value = True
    inp = [textToProcess]
    #accussed raped a girl for 7 days
    #accussed murdered a man
    #accussed committed theft of gold ornaments
    print(inp)
    inp = tokenz.texts_to_sequences(inp)
    inp = sequence.pad_sequences(inp, maxlen=200)
    index_from=3
    start_char = 1
    if start_char is not None:
            inp = [[start_char] + [w + index_from for w in x1] for x1 in inp]
    elif index_from:
            inp = [[w + index_from for w in x1] for x1 in inp]
    num_words = None
    if not num_words:
            num_words = max([max(x1) for x1 in inp])
    oov_char = 2
    skip_top = 0
    if oov_char is not None:
            inp = [[w if (skip_top <= w < num_words) else oov_char for w in x1] for x1 in inp]
    else:
            inp = [[w for w in x1 if (skip_top <= w < num_words)] for x1 in inp]
    inp=sequence.pad_sequences(inp, maxlen=151)
    print('ipc you get from text '+str(labelencoder.classes_[modelrr.predict(inp).argmax(axis=1)]))
    return labelencoder.classes_[modelrr.predict(inp).argmax(axis=1)]

@app.route('/')
def hello_world():
    return 'hello world'

@app.route('/get-result')
def predict():
    textToProcess = request.args.get('0','')
    if textToProcess == '':
        print('no input')
        return ''
    print('input to our model '+ textToProcess)
    return str(getResults(textToProcess)[0])


def main():
    getModelVar()
    app.run(host='localhost', port=3001, debug=True,threaded=False)


if __name__ == '__main__':
    main()
