import {
    Entity,
    CreateDateColumn,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('comments')
class Comment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    comment_body: string;

    @CreateDateColumn()
    created_at: Date;
}

export default Comment;
