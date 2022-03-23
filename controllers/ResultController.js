class ResultController {
  index(req, res) {
    const { evaluationGrade } = req.query;
    return res.render('result', { evaluationGrade });
  }
}

export default ResultController;
