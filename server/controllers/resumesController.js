module.exports = {
	createResume(req, res, next) {
		const db = req.app.get('db');

		db.resumes.createResume([
			req.params.user_id,
			req.body.linkedin,
			req.body.portfolio,
			req.body.work_exp,
			req.body.education,
			req.body.skills,
			req.body.about_me,
			req.body.location,
			req.body.email,
			req.body.phone
		]).then(response => {
			res.status(200).send(response)
		}).catch(err => console.log(err));
	},
	createResumeEducation(req, res, next) {
		const db = req.app.get('db');

		db.resumes.createEducation([
				req.params.resume_id,
				req.body.school,
				req.body.degree,
				req.body.study_field,
				req.body.from_date,
				req.body.to_date,
				req.body.description
			]).then(response => {
				res.status(200).send(response)
			}).catch(err => console.log(err))
	},
	createResumeExperience(req, res, next) {
		const db = req.app.get('db');

		db.resumes.createWorkExperience([
				req.params.resume_id,
				req.body.title,
				req.body.company,
				req.body.from_date,
				req.body.to_date,
				req.body.description
			]).then(response => {
				res.status(200).send(response)
			}).catch(err => console.log(err))
	},
	createResumeSkill(req, res, next) {
		const db = req.app.get('db');

		db.resumes.createResumeSkill([req.params.resume_id, req.body.name]).then(response => {
			res.status(200).send(response);
		}).catch(err => console.log(err));
	},
	getUserInformation(req, res, next) {
		const db = req.app.get('db')

		db.users.getUserById([req.params.user_id]).then(response => {
			res.status(200).send(response)
		}).catch(err => console.log(err))
	},
	getResumeByUser(req, res, next) {
		const db = req.app.get('db');

		db.resumes.getResumeByUser([req.params.user_id]).then(response => {
			res.status(200).send(response)
		}).catch(err => console.log(err));
	},
	createSubmittedResume(req, res, next) {
		const db = req.app.get('db');

		db.resumes.createSubmittedResume([req.params.job_post_id, req.params.user_id])
			.then(response => {
				res.status(200).send(response)
			}).catch(err => console.log(err))
	},
	updateResumeDemographics(req, res, next) {
		const db = req.app.get('db');

		db.resumes.updateResumeDemographics([
				req.body.about_me,
				req.body.location,
				req.body.email,
				req.body.phone,
				req.body.portfolio,
				req.body.linkedin,
				req.params.user_id
			]).then(response => {
				res.status(200).send(response)
			}).catch(err => console.log(err))
	},
	updateResumeWorkExperience(req, res, next) {
		const db = req.app.get('db');

		db.resumes.updateResumeWorkExperience([
				req.params.experience_id,
				req.body.title,
				req.body.company,
				req.body.from_date,
				req.body.to_date,
				req.body.description
			]).then(response => {
				res.status(200).send(response)
			}).catch(err => console.log(err));
	},
	updateResumeEducation(req, res, next) {
		const db = req.app.get('db');

		db.resumes.updateResumeEducation([
				req.params.education_id,
				req.body.school,
				req.body.degree,
				req.body.study_field,
				req.body.from_date,
				req.body.to_date,
				req.body.description
			]).then(response => {
				res.status(200).send(response)
			}).catch(err => console.log(err));
	},
	deleteResumeEducation(req, res, next) {
		const db = req.app.get('db');

		db.resumes.deleteResumeEducation([req.params.education_id]).then(response => {
			res.status(200).send(response)
		}).catch(err => console.log(err));
	},
	deleteResumeExperience(req, res, next) {
		const db = req.app.get('db');

		db.resumes.deleteResumeExperience([req.params.experience_id])
			.then(response => {
				res.status(200).send(response)
			}).catch(err => console.log(err))
	},
	deleteResumeSkill(req, res, next) {
		const db = req.app.get('db');

		db.resumes.deleteResumeSkill([req.params.skill_id])
			.then(response => {
				res.status(200).send(response)
			}).catch(err => console.log(err));
	}
}
