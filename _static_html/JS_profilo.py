#! -*- coding:utf-8 -*-
from flask import Flask,jsonify,render_template
app = Flask(__name__)

# 新的后端修改好了！
dt = {"data":[{"A":"1","B":"日経225種平均株価先物","C":"売りに出る","D":"23460","E":"2020年２月４日"},{"A":"2","B":"(株)ジャパンインベストメントアドバイザー(7172)","C":"買いに出る","D":"1870.5","E":"2020年２月４日"},{"A":"3","B":"澤田ホールディングス(株)(8699)","C":"買いに出る","D":"1031.2","E":"2020年２月４日"}]}

@app.route('/tabledata', methods=['GET'])
def lsdata():
    return jsonify(dt)

dt2={"data":[-0.11,-1.51,0.16,-0.16,-1.01,-0.88,-2.99,-2.62,-3.11,-1.31,-2.3,-2.2,0.78,0.62,0.76,0.07,-0.62,-0.29,0.54,0.48,-0.31,-0.6,0.95,-0.49,0.44,1.49,1.03,0.83,-1.63,-0.22,-0.37,0.25,-0.24,1.64,2.1,1.74,0.5,1.8,1.94,1,0.38,1.85,1.55,1.56,-0.85,-0.2,-0.36,-0.25,-0.61,-1.05,-1.14,-0.48,-1.16,-2.26,-0.06,0.06,0.6,1.85,3.24,1.47,4.49,4.31,4.18,3.93,3.95,3.85,4.07,4.25,4.51,4.85,4.6,4.69,5.24,5.31,6.57,6.19,6.35,6.26,6.39,6.33,7.28,7.4,7.31,7.21,6.7,6.24,6.23,5,4.3,4.52,4.8,4.86,5.15,4.96,5.11,5.51,5.71]}


@app.route('/jstock/v1')
def lsVali():
    return render_template('jstock.html')

@app.route('/jstock', methods=['GET'])
def lsdata1():
    return jsonify(dt2)

@app.route('/showDT')
def showDataTable():
    return render_template('_static_html.html')

if __name__ == '__main__':
    app.run(debug=True)



