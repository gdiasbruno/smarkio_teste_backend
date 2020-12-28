import { getRepository } from 'typeorm';

import Comment from '../models/Comment';

interface Request {
    commentBody: string;
}

class CreateCommentService {
    public async execute({ commentBody }: Request): Promise<Comment> {
        const commentsRepository = getRepository(Comment);

        const comment = commentsRepository.create({
            comment_body: commentBody,
        });

        await commentsRepository.save(comment);

        return comment;
    }
}

export default CreateCommentService;
